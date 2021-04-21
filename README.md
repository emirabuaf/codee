
To run server go to `server` folder and run
```
yarn start
```

Within the frontend app API can be accessed by `http://localhost:8082/api`

Get all items:
```
GET /api/items
```

Update item status:
```
PUT /api/items/:id
{
    "status": "done"
}
```

TASKS:

1. Show table with all the items
    - Image should be centered in rounded box (80x80px).
    - If there are no image - show some placeholder
    - Status should be shown in different colors 
2. Filter table by name (when text in search input changed) 
    - trigger filter with some delay (200ms)
3. Make name column clickable and sort items by name ASC/DESC
4. By Clicking on image open full view im modal
    - Close modal on press `Esc` button
    - Close modal on background click
5. Implement ability to change item status 
6. Show Spinner on loading data
7. Handle API errors - show error message
