from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

todos = {}
habits = {}

def validate_item(data):
    if 'title' not in data or not isinstance(data['title'], str) or not data['title'].strip():
        return False, "Title is required and must be a non-empty string."
    return True, ""

@app.route('/todos', methods=['GET'])
def get_todos():
    return jsonify(list(todos.values()))

@app.route('/todos', methods=['POST'])
def add_todo():
    data = request.get_json()
    valid, msg = validate_item(data)
    if not valid:
        return jsonify({'error': msg}), 400
    todo_id = str(uuid.uuid4())
    todo = {
        'id': todo_id,
        'title': data['title'],
        'completed': False
    }
    todos[todo_id] = todo
    return jsonify(todo), 201

@app.route('/todos/<todo_id>', methods=['PUT'])
def update_todo(todo_id):
    if todo_id not in todos:
        return jsonify({'error': 'Todo not found'}), 404
    data = request.get_json()
    valid, msg = validate_item(data)
    if not valid:
        return jsonify({'error': msg}), 400
    todos[todo_id]['title'] = data['title']
    if 'completed' in data and isinstance(data['completed'], bool):
        todos[todo_id]['completed'] = data['completed']
    return jsonify(todos[todo_id])

@app.route('/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    if todo_id not in todos:
        return jsonify({'error': 'Todo not found'}), 404
    del todos[todo_id]
    return jsonify({'message': 'Todo deleted'})

@app.route('/habits', methods=['GET'])
def get_habits():
    return jsonify(list(habits.values()))

@app.route('/habits', methods=['POST'])
def add_habit():
    data = request.get_json()
    valid, msg = validate_item(data)
    if not valid:
        return jsonify({'error': msg}), 400
    habit_id = str(uuid.uuid4())
    habit = {
        'id': habit_id,
        'title': data['title'],
        'completed': False
    }
    habits[habit_id] = habit
    return jsonify(habit), 201

@app.route('/habits/<habit_id>', methods=['PUT'])
def update_habit(habit_id):
    if habit_id not in habits:
        return jsonify({'error': 'Habit not found'}), 404
    data = request.get_json()
    valid, msg = validate_item(data)
    if not valid:
        return jsonify({'error': msg}), 400
    habits[habit_id]['title'] = data['title']
    if 'completed' in data and isinstance(data['completed'], bool):
        habits[habit_id]['completed'] = data['completed']
    return jsonify(habits[habit_id])

@app.route('/habits/<habit_id>', methods=['DELETE'])
def delete_habit(habit_id):
    if habit_id not in habits:
        return jsonify({'error': 'Habit not found'}), 404
    del habits[habit_id]
    return jsonify({'message': 'Habit deleted'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)