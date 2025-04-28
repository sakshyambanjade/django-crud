from django.db import models

class Book(models.Model):
    STATUS_CHOICES = [
        ('available', 'Available'),
        ('prebooked', 'Pre-booked'),
        ('taken', 'Taken'),
    ]

    title = models.CharField(max_length=200)
    release_year = models.IntegerField()
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='available'
    )

    def __str__(self):
        return self.title
