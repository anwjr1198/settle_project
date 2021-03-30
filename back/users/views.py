from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from rest_framework import status
from .models import User 
import jwt, datetime

class SignupView(APIView):
    """
    POST /user/signup
    """
    def post(self, request):

        serializer = UserSerializer(data=request.data)
        if User.objects.filter(email=request.data['email']):
            content = {'dupleKey': 'email', 'message': '(!) This email is already exist'}
            raise AuthenticationFailed(content)

        if User.objects.filter(nickname=request.data['nickname']):
            content = {'dupleKey': 'nickname', 'message': '(!) This name is already exist'}
            raise AuthenticationFailed(content)

        content = {'nickname': request.data['nickname'], 'message': 'success'}

        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(content)


class LoginView(APIView):
    """
    POST /user/login
    """
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()
        NickName = User.objects.get(email=request.data['email']).nickname       

        if user is None:
            content = {"error": "email_not_found",  "message": "(!) 존재하지 않는 이메일입니다."}
            raise AuthenticationFailed(content)

        if not user.check_password(password):
            content = {"error": "passord_Inconsistency",  "message": "(!) 비밀번호를 다시 확인해주세요."}
            raise AuthenticationFailed(content)

        payload ={
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }
        # secret key 가져올것
        token = jwt.encode(payload,'secret',algorithm='HS256').decode('utf-8')
        response = Response()
        response.set_cookie(key='jwt',value=token, httponly=True)
    
        content = {"message": "success to login","UserName": NickName, "jwt": token}
        response.data=content

        return response

# 로그인된 유저 
class UserView(APIView):
    """
    GET /user/logged-in
    """
    def get(self,request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Required Token')
        try:
            payload = jwt.decode(token, 'secret',algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Expired Token')
        user = User.objects.filter(id=payload['id']).first()
        serialiser = UserSerializer(user)
        return Response(serialiser.data)

class LogoutView(APIView):
    """
    POST /user/logout
    """
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data={
            'message': "logout_success"
        }
        return response
    