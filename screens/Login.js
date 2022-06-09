import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  
} from "react-native";
import{createAppContainer, createSwitchNavigator} from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Header } from "react-native-elements";
import Switch from '../navigation/Switch'
import firebase from 'firebase'
let customFonts = {
  "Bubblegum-Sans": require("../assets/Fonts/BubblegumSans-Regular.ttf"),
};


export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            if (result.additionalUserInfo.isNewUser) {
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  locale: result.additionalUserInfo.profile.locale,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,

                })
                .then(function (snapshot) { });
            }
          })
          .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  // signInWithGoogleAsync = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       behaviour: "web",
  //       androidClientId:
  //         "622111643334-rjunph4g8k3h2r1ebp5a3brgamlcnuq2.apps.googleusercontent.com",
  //       iosClientId:
  //         "993908358863-871ltgfaogm9tdss7c897rabbchab742.apps.googleusercontent.com",
  //       scopes: ["profile", "email"]
  //     });

  //     if (result.type === "success") {
  //       this.onSignIn(result);
  //       return result.accessToken;
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     console.log(e.message);
  //     return { error: true };
  //   }
  // };
  goTocreate = () => {
    this.props.navigation.navigate('Choose')
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/image.png")}
        style={{ height: RFValue(372) }}
      >
        <View>
          <Header
            backgroundColor={"violet"}
            centerComponent={{
              text: "Daily Routine",
              style: { color: "#fff", fontSize: 40 },
            }}
          />

          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/Google_icon.png")}
              style={styles.googleIcon}
              onPress={() => this.signInWithGoogleAsync()}
            ></Image>
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.guestButton}>
            <Image
              source={require("../assets/guest.png")}
              style={styles.guest}
              onPress={this.goTocreate}

            ></Image>
            <Text style={styles.googleText}>Guest Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    alignSelf: "center",
    bottom: RFValue(-90),
  },
  guestButton: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    alignSelf: "center",
    bottom: RFValue(-150),
  },
  googleIcon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain",
    justifyContent: "space-evenly",
  },
  googleText: {
    color: "black",
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans",
  },
  guest: {
    width: RFValue(50),
    height: RFValue(50),
    left: RFValue(-10),
    resizeMode: "contain",
  },
});

