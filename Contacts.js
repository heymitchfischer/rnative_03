import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, PermissionsAndroid, requestMultiple} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Contacts from 'react-native-contacts';

class App extends Component {
  state = {
    // avatar: ''
    myContacts:[]
  }

  // addAvatar = () => {
  //   ImagePicker.launchImageLibrary({

  //   }, response => {
  //     if (response.didCancel) {
  //       console.warn("Really??");
  //     } else if (response.error) {
  //       console.warn(response.error);
  //     } else {
  //       this.setState({
  //         avatar: response.uri
  //       });
  //     }
  //   });
  // }

  async requestContactsPermission() {
    if (Platform.OS === "ios") {
      return true;
    } else {
      const granted = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_CONTACTS, PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS])
      
      if (granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED && granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    }
  }

  getContacts = () => {
    this.requestContactsPermission()
    .then((didGetPermission) => {
      if (didGetPermission) {
        Contacts.getAll((err, contacts) => {
          if (err) {
            throw err;
          }
          this.setState({
            myContacts: contacts
          })
        })
      } else {
        alert("No Permission");
      }
    });
  }

  openForm = () => {
    const newContact = {
      emailAddresses: [{
        label: "work",
        email: "mitch@example.com"
      }],
      familyName: "Fischer",
      givenName: "Mitch",
      phoneNumbers: [{
        label: "mobile",
        number: "(555) 555-5555"
      }]
    }

    Contacts.openContactForm(newContact, (err) => {
      if (err) {
        console.warn(err);
      }

    })
  }

  addContact = () => {
    this.requestContactsPermission()
    .then((didGetPermission) => {
      if (didGetPermission) {
        const newContact = {
          emailAddresses: [{
            label: "work",
            email: "mitch@example.com"
          }],
          familyName: "Fischer",
          givenName: "Mitch",
          phoneNumbers: [{
            label: "mobile",
            number: "(555) 555-5555"
          }]
        }

        Contacts.addContact(newContact, (err) => {
          if (err) {
            throw err;
          }
          this.getContacts();
        });
      } else {
        alert("No Permission");
      }
    });
  }

  render() {
    return (
      <View>
        {/*<Image
          source={{uri: this.state.avatar}}
          style={styles.avatar}
        />

        <Button
          title={"Add an avatar"}
          onPress={() => this.addAvatar()}
        />*/}

        {this.state.myContacts.map((item, i) => (
            <Text key={i}>{item.givenName} {item.familyName}</Text>
          ))
        }


        <Button
          title={"Load Contacts"}
          onPress={() => this.getContacts()}
        />

        <Button
          title={"Add Contact"}
          onPress={() => this.addContact()}
        />

        <Button
          title={"Open Form"}
          onPress={() => this.openForm()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: 400
  }
});

export default App;