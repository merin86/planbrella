from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth.models import User
from django.utils.timezone import now, timedelta
from .models import Task

class TaskTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)
        
        due_date = now() + timedelta(days=5)
        
        self.task = Task.objects.create(
            title='Test Task',
            description='Test Description',
            owner=self.user,
            due_date=due_date
        )
        
        self.url_list = reverse('task-list')
        self.url_detail = reverse('task-detail', kwargs={'pk': self.task.pk})

    def test_get_tasks(self):
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_create_task(self):
        data = {
            'title': 'New Task',
            'description': 'New Description',
            'due_date': (now() + timedelta(days=3)).isoformat()
        }
        response = self.client.post(self.url_list, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 2)
        self.assertEqual(Task.objects.latest('id').title, 'New Task')


    def test_get_specific_task(self):
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.task.title)

    def test_update_task(self):
        data = {
            'title': 'Updated Task',
            'description': self.task.description,
            'due_date': (now() + timedelta(days=10)).isoformat()
        }
        response = self.client.put(self.url_detail, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.task.refresh_from_db()
        self.assertEqual(self.task.title, 'Updated Task')


    def test_delete_task(self):
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Task.objects.count(), 0)
