from django.db import models
from django.contrib.auth.models import User

class Member(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  bmi_result = models.CharField(max_length=5)


class BMIRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    bmi = models.FloatField()
    weight = models.FloatField()
    height = models.FloatField()

    class Meta:
        ordering = ['-date']  # เรียงจากใหม่ไปเก่า