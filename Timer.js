import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput
} from "react-native";

import ModalInput from "./src/component/modal";
import CompleteBanner from "./src/component/completeBanner";

import TimerAlert from "./src/component/timerAlert";

const timer1 = () => {};
const timer2 = () => {};
const timer3 = () => {};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime1: 10,
      remainingTime2: 10,
      remainingTime3: 10,
      modalVisible: false,
      closeAlertView1: false,
      closeAlertView2: false,
      closeAlertView3: false,
      isViewBanner1: false,
      isViewBanner2: false,
      isViewBanner3: false,
      finishdTime:undefined,
      foodName1:undefined,
      foodName2:undefined,
      foodName3:undefined

    };
  }

  countdownTimer1() {
    this.setState({ remainingTime1: 10 });
    clearInterval(timer1);

    timer1 = setInterval(() => {
      if (!this.state.remainingTime1) {
        clearInterval(timer1);
        return false;
      }
      this.setState(prevState => {
        return { remainingTime1: prevState.remainingTime1 - 1 };
      });
    }, 1000);
  }

  countdownTimer2() {
    this.setState({ remainingTime2: 10 });
    clearInterval(timer2);

    timer2 = setInterval(() => {
      if (!this.state.remainingTime2) {
        clearInterval(timer2);
        return false;
      }
      this.setState(prevState => {
        return { remainingTime2: prevState.remainingTime2 - 1 };
      });
    }, 1000);
  }

  countdownTimer3() {
    this.setState({ remainingTime3: 10 });
    clearInterval(timer3);

    timer3 = setInterval(() => {
      if (!this.state.remainingTime3) {
        clearInterval(timer3);
        return false;
      }

      this.setState(prevState => {
        return { remainingTime3: prevState.remainingTime3 - 1 };
      });
    }, 1000);
  }

  render() {

    _setFoodName = (text_) => {
      alert(text_)
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} onPress={() => this.setState({
          modalVisible:true
        })}>
          <View style={styles.styleBtn1}>
            <Image
              style={styles.styleimage}
              source={require("./assets/cake.png")}
            />
            <View style={styles.cookContainerInfo}>
              <Text style={styles.title}>Love Cake</Text>
              <Text style={styles.timer}> 00:10 </Text>
            </View>
          </View>

          { this.state.closeAlertView1 && (
            <TimerAlert
              onPress={() => this.setState({ closeAlertView1: false })}
            />
          )}

          {this.state.isViewBanner2 && <CompleteBanner time={this.state.finishdTime} foodName={this.state.foodName} onPress={() => this.setState({isViewBanner2:false})} />}
        
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, justifyContent: "center" }} onPress={() => this.setState({
          modalVisible:true
        })}>
          <View style={styles.styleBtn2}>
            <Image
              style={styles.styleimage}
              source={require("./assets/chicken.png")}
            />
            <View style={styles.cookContainerInfo}>
              <Text style={styles.title}>Love Cake</Text>
              <Text style={styles.timer}> 00:10 </Text>
            </View>
          </View>

          {this.state.closeAlertView2 && (
            <TimerAlert
              onPress={() => this.setState({ closeAlertView2: false })}
            />
          )}

          {this.state.isViewBanner2 && <CompleteBanner time={this.state.finishdTime} foodName={this.state.foodName} onPress={() => this.setState({isViewBanner2:false})} />}

        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({
          modalVisible:true
        })} style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.styleBtn3}>
            <Image
              style={styles.styleimage}
              source={require("./assets/noodles.png")}
            />
            <View style={styles.cookContainerInfo}>
              <Text style={styles.title}>Love Cake</Text>
              <Text style={styles.timer}> 00:10 </Text>
            </View>
          </View>

          {this.state.closeAlertView3 && (
            <TimerAlert
              onPress={() => this.setState({ closeAlertView3: false })}
            />
          )}

          {this.state.isViewBanner2 && <CompleteBanner time={this.state.finishdTime} foodName={this.state.foodName} onPress={() => this.setState({isViewBanner2:false})} />}

        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => alert("closed")}
        >
          <View
            style={{
              marginVertical: "30%",
              padding: 12,
              marginHorizontal: "10%",
              backgroundColor: "#fff",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <TextInput
              style={{ width: "100%", fontSize: 25 }}
              placeholder="what are you going to cook ?"
              onChangeText={(text)=>_setFoodName(text)}
            />
            <TextInput
              style={{
                width: "100%",
                fontSize: 60,
                justifyContent: "center",
                alignItems: "center"
              }}
              placeholder="00:00"
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#42a5f5",
                width: "100%",
                height: "20%",
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() => this.setState({ modalVisible: false })}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>Start</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 50,
    fontWeight: "600",
    color: "gray"
  },
  title: {
    fontSize: 40,
    fontWeight: "100",
    elevation: 1,
    shadowOpacity: 0.1,
    color: "gray"
  },
  cookContainerInfo: {
    flexDirection: "column"
  },
  container: {
    flex: 1
  },
  styleimage: {
    height: "30%",
    width: "20%"
  },
  styleBtn1: {
    flex: 1,
    backgroundColor: "#ffd1dc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  styleBtn2: {
    flex: 1,
    backgroundColor: "#64b5f6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  styleBtn3: {
    flex: 1,
    backgroundColor: "#c7a4ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default Timer;
