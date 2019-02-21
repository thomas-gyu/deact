from rest_framework import serializers
from .models import Notes
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('id', 'text')


# 회원가입 시리얼라이저

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["username"], None, validated_data["password"]
        )
        return user


# 접속 유지중인지 확인할 시리얼라이저

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username")


# 로그인 시리얼라이저

class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")
