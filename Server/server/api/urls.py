from django.urls import path
from .views import BookListView, BookCreateView

urlpatterns = [
    # GET  /api/books/        -> list all books
    # POST /api/books/create/ -> create a new book
    path('books/', BookListView.as_view(), name='book-list'),
    path('books/create/', BookCreateView.as_view(), name='book-create'),
]
