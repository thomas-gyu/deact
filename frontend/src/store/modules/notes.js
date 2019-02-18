import { ajax } from 'rxjs/observable/dom/ajax';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { ofType } from 'redux-observable';


const CHANGE_NOTE_INPUT = "notes/CHANGE_NOTE_INPUT";

const ADD_NOTE = "notes/ADD_NOTE";
const ADD_NOTE_SUCCESS = "note/ADD_NOTE_SUCCESS";
const ADD_NOTE_FAILURE = "note/ADD_NOTE_FAILURE";


export const changeNoteInput = ({ value }) => ({
  type: CHANGE_NOTE_INPUT,
  payload: { value }
});

export const addNote = () => ({
  type: ADD_NOTE
});

export const addNoteSuccess = note => ({
  type: ADD_NOTE_SUCCESS,
  payload: {
    note
  }
});
export const addNoteFailure = error => ({
  type: ADD_NOTE_FAILURE,
  payload: {
    error
  }
});

const addNoteEpic = (action$, state$) => {
  return action$.pipe(
    ofType(ADD_NOTE),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax.post(`/api/notes/`, { text: state.notes.noteInput }).pipe(
        map(response => {
          const note = response.response;
          return addNoteSuccess(note);
        }),
        catchError(error =>
          of({
            type: ADD_NOTE_FAILURE,
            payload: error,
            error: true
          })
        )
      );
    })
  );
};

const initialState = {
  noteInput: "",
  notes: []
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTE_INPUT:
      return {
        ...state,
        noteInput: action.payload.value
      };
    case ADD_NOTE_SUCCESS:
      const { note } = action.payload;
      return {
        ...state,
        notes: [note].concat(state.notes),
        noteInput: ""
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        error: {
          triggered: true,
          message: "Error! Please Try With Unempty Note"
        }
      };
    default:
      return state;
  }
};

export const notesEpics = {
  addNoteEpic
};
