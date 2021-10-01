import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

const Display = (props) => {
  const Handledelete = (index) => {
    props.Handledelete(index);
  };

  const [checked, setChecked] = useState(false);
  const [check, setCheck] = useState(false);

  const details = props.todo.map((delta, k) => {
    if (delta.todo==="first") {
      if (checked == false) {
        return (
          <View style={styles.ll}>
            <View style={styles.l}>
              <View style={styles.todo}>
                
                <CheckBox style={styles.x} value={checked} onValueChange={setChecked} />
               
                <Text  style={{ color: 'white', marginLeft:30, width:150 }}>
                  {delta.fname}
                </Text >
                <TouchableOpacity style={styles.p}  onPress={() => Handledelete(delta.fname)}>
                  x
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      } else if (checked == true) {
        return (
          <View style={styles.ll}>
            <View style={styles.l}>
              <View style={styles.todo}>
               
                <CheckBox style={styles.x} value={checked} onValueChange={setChecked} />
                <Text  style={{ color: 'white' , textDecoration: 'line-through',marginLeft:30, width:150}}>
                  {delta.fname}
                </Text >
                 <TouchableOpacity
                   style={styles.p} 
                  onPress={() => Handledelete(delta.fname)}>
                  x
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
    }
    if (delta.todo==="Second") {
      if (check == false) {
        return (
          <View style={styles.ll}>
            <View style={styles.re}>
              <View style={styles.todo}>
              
                <CheckBox style={styles.x} value={check} onValueChange={setCheck} />
                <Text  style={{ color: 'white',marginLeft:30, width:150, }}>
                  {delta.fname}
                </Text >
                  <TouchableOpacity
                  style={styles.p} 
                  onPress={() => Handledelete(delta.fname)}>
                  x
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      } else if (check == true) {
        return (
          <View style={styles.ll}>
            <View style={styles.re}>
              <View style={styles.todo}>
                 
                <CheckBox style={styles.x} value={check} onValueChange={setCheck} />
                <Text 
                  style={{ color: 'white', textDecoration: 'line-through',marginLeft:30, width:150 }}>
                  {delta.fname}
                </Text>
               <TouchableOpacity style={styles.p}  onPress={() => Handledelete(delta.fname)}>
                  x
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
    }
  });
  return <>{details}</>;
};
export default Display;
const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    marginLeft:10,
    marginTop: 5,
    width:280,
    height:40
  },
  ll:{
    marginTop:5
  },
  re:{
    backgroundColor:"red",
    color:"white"
  },
  p:{
    backgroundColor:"white",
    color:"black",
    borderRadius:15,
    width:25,
    alignItems:"center",
    paddingTop:2,
    height:25,
      marginLeft:50,
  },
  l:{
    backgroundColor:"green"
  }
 
});
