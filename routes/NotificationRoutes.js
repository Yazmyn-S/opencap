const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/NotificationController');

// Route to create a new notification
router.post('/', notificationController.createNotification);

// Route to get all notifications
router.get('/', notificationController.getNotifications);

// Route to get a specific notification by ID
router.get('/:id', notificationController.getNotificationById);

// Route to delete a specific notification by ID
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;
