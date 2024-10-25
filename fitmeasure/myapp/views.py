from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login


def homepage(request):
    return render(request, "homepage.html")

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm-password')
        email = request.POST.get('email')

        if not username or not password or not confirm_password or not email:
            messages.error(request, "All fields are required")
            return render(request, 'register.html')

        if password != confirm_password:
            messages.error(request, "Password does not match")
            return render(request, 'register.html')

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username is already taken")
            return render(request, 'register.html')

        if User.objects.filter(email=email).exists():
            messages.error(request, "Email is already registered")
            return render(request, 'register.html')

        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()

        return redirect('login') 

    return render(request, 'register.html')

def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('homepage')
            else:
                messages.error(request, 'Invalid user')
        else:
            messages.error(request, 'Invalid username or password')
    form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import BMIRecord
import json

@login_required
def homepage(request):
    bmi_records = BMIRecord.objects.filter(user=request.user)
    return render(request, 'homepage.html', {'bmi_records': bmi_records})

@login_required
def save_bmi(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        BMIRecord.objects.create(
            user=request.user,
            bmi=data['bmi'],
            weight=data['weight'],
            height=data['height']
        )
        return JsonResponse({'status': 'success'})
    
@login_required
def get_bmi_records(request):
    records = BMIRecord.objects.filter(user=request.user).values('date', 'bmi', 'weight', 'height')
    return JsonResponse(list(records), safe=False)

