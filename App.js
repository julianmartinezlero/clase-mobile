import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";
import { Button } from "./components/button";

export default function App() {
  let [title, setTitle] = useState("HOLA");
  let [nombre, setNombre] = useState("");
  let [apellido, setApellido] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function mostrarAlerta() {
    setTitle("HOLO");
  }

  const DATOS = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      color: "red",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      color: "blue",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      color: "gree",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Four Item",
      color: "gray",
    },
  ];

  const su = {
    uri: "https://images.unsplash.com/photo-1707147231430-7870dda96138?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  // return (
  //   <View style={styles.container}>
  //     <SafeAreaView style={styles.container}>

  //     <ImageBackground source={su} style={{width: '100%', height: '100%'}}>

  //     <Text>Hola mundo!</Text>
  //     <StatusBar style="auto" />
  //     <View style={{height: 100, width: 400}}>
  //       <FlatList data={DATOS} style={{backgroundColor: 'red', height: 100}}
  //         renderItem={({item}) => <Button texto={item.title} color={item.color}/>}
  //         keyExtractor={(item) => item.id}
  //       />
  //     </View>
  //     </ImageBackground>

  //     </SafeAreaView>
  //   </View>
  // );
  // return (
  //   <KeyboardAvoidingView
  //     behavior={Platform.OS === "ios" ? "padding" : "height"}
  //     style={styles.container}
  //   >
  //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //       <View style={styles.inner}>
  //         <Text style={styles.header}>Header</Text>
  //         <TextInput placeholder="Username" style={styles.textInput} />
  //         <View style={styles.btnContainer}>
  //           <Button title="Submit" onPress={() => null} />
  //         </View>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   </KeyboardAvoidingView>
  // );

  function pressionInicaste() {
    console.log("iniciaste a presona");
  }

  function presionasteAqui() {
    console.log("presionaste");
  }

  function presionasteLargo() {
    console.log("long press");
  }

  function dejastePresionar() {
    console.log("no press");
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable color="red" onPress={() => setModalVisible(true)}>
          <Text>Press Me</Text>
        </Pressable> */}
        <Pressable
          onPress={presionasteAqui}
          onPressIn={pressionInicaste}
          onPressOut={dejastePresionar}
          onLongPress={presionasteLargo}
        >
          <Text>I'm pressable!</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "",
    fontStyle: "italic",
  },
  algun: {
    borderRadius: 50,
    color: "black",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
