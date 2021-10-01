import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Display from '../components/Display';
import { RadioButton } from 'react-native-paper';

const Form = () => {
  const [Todos, setTodos] = React.useState([]);
  const [TodoItem, setTodoItem] = React.useState({ fname: '' });

  const [tod, setTod] = React.useState({ todo: '' });


  const handleTodo = () => {
    
    setTodos([...Todos, { fname: TodoItem.fname, todo: tod }]);
  
  };

  const Handledelete = (fname) => {
    setTodos(Todos.filter((det) => det.fname !== fname));
  };

  return (
    <View style={styles.all}>
      <View style={styles.todo}>
        <View style={styles.head}>
          <Text style={styles.text}>The TodoList</Text>
        </View>
        <View style={styles.body} onSubmit={(event) => event.preventDefault()}>
          <TextInput
            style={styles.input}
            placeholder="Enter todo........."
            fname="name"
            value={TodoItem.fname}
            onChangeText={(e) => setTodoItem({ ...TodoItem, fname: e })}
          />

          <RadioButton.Group
            onValueChange={(newValue) => setTod(newValue)}
            value={tod}>
            <View style={{flexDirection:"row"}}>
              <View style={styles.rad}>
                <RadioButton value="first" />
                <Text style={{ paddingTop: 8 }}>First</Text>
              </View>
              <View style={styles.rad}>
                <RadioButton value="Second" />
                <Text style={{ paddingTop: 8 }}>Second</Text>
              </View>
            </View>
          </RadioButton.Group>

          <View style={styles.dis}>
            <Display todo={Todos} Handledelete={Handledelete} />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleTodo(TodoItem)}>
            + Add-Task
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Form;
const styles = StyleSheet.create({
  dis: {
    height: 400,
    overflow: 'scroll',
  },
  rad: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 300,
  },

  all: {
    backgroundColor: '#a4c2f4',
    height: 600,
  },
  body: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 490,
  },
  todo: {
    padding: 10,
  },
  head: {
    flexDirection: 'row',
    backgroundColor: 'purple',
  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 10,
    fontWeight: 700,
    marginLeft: 80,
  },
  btn: {
    marginTop: 10,
    backgroundColor: 'purple',
    textAlign: 'CENTER',
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
    margin: 80,
    borderRadius: 10,
    height: 50,
    padding: 10,
  },
});
