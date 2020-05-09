##Views of Hindi

from django.shortcuts import render
from django.http import HttpResponse
import pyrebase
from django.contrib import auth
from firebase import firebase
from firebase_admin import credentials




config = {

    'apiKey': "AIzaSyDceypGOt8a6g-gVAvp0Zdcj1otpnhoy5M",
    'authDomain': "virus-baba-or.firebaseapp.com",
    'databaseURL': "https://virus-baba-or.firebaseio.com",
    'projectId': "virus-baba-or",
    'storageBucket': "virus-baba-or.appspot.com",
    'messagingSenderId': "737792231185",
    'appId': "1:737792231185:web:323bced20b6019c1a42eb0",
    'measurementId': "G-RQTTC8L0Y4"

}

firebase = pyrebase.initialize_app(config);
authe = firebase.auth()
database = firebase.database()
#firebase = firebase.FirebaseApplication('https://virus-baba-or.firebaseio.com/personal/')

def index_hi(request):
    return render(request, 'index_hi.html')

def signUp_hi(request):
    return render(request, 'login_hi.html')



def profile_hi(request):
    email = request.POST.get("emailLogin_hi")
    passw = request.POST.get("passLogin_hi")
    
    try:
        user = authe.sign_in_with_email_and_password(email,passw)
        
    except:
        message="सही पासवर्ड / ईमेल या दोनों दर्ज करें"
        return render(request, 'index_hi.html',{"messg":message})
    
    #name = firebase.get(user['localId'],'name')
    session_id = user['idToken']
    request.session['uid'] = str(session_id)
    return render(request, 'profile_hi.html')

def signCompleted_hi(request):
    email_login =request.POST.get('email1')
    Passwd = request.POST.get('pass1')
    CPassed = request.POST.get('cpass1')
    name = request.POST.get('name1')
    age = request.POST.get('age1')
    gender = request.POST.get('gender1')
    phone = request.POST.get('phone1')
            
    try:
        user=authe.create_user_with_email_and_password(email_login,Passwd)
    except:
        return render(request,'score.html')
   
    uid = user['localId']
    print(uid)
    data = {
            "userId":uid,
            "name":name,
            "age":age,
            "gender":gender,
            "phone":phone,
            "email":email_login
        
            }
    
            
    result = database.child('personal').child(uid).set(data)
        
    print(result)
    return render(request, 'profile_hi.html')

def logout_hi(request):
    auth.logout(request)
    return render(request, 'index.html')
    

def scores_hi(request):
    return render(request, 'score.html')

def maps_hi(request):
    return render(request, 'map_hi.html')


def final_hi(request):
    return render(request, 'final_hi.html')