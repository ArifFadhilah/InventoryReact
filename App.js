import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Picker, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Dimensions, ImageBackground } from 'react-native';
import Image from 'react-native-scalable-image';
import ResponsiveImage from 'react-native-responsive-image';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Dashboard from 'react-native-dashboard';
//import { ImagePicker } from 'expo';

class DashboarActivity extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      isLoading: true
    }
  }
  static navigationOptions =
    {
    title: 'DashboarActivity'
  };
  /*componentDidMount() {
    return fetch('https://inventoriinti.000webhostapp.com/Student/ShowCountData.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
      }, 
      );
    })
    .catch((error) => {
       console.error(error);
    });
  }*/   
  Dashboar = () => {
    this.props.navigation.navigate('Second');
  }

  render() {
    return (
      <ImageBackground source={require('./Page3.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer}>
          <Text style= {styles.TextHeader}>DASHBOARD</Text>
          <Text style= {styles.TextDashboar}> TOTAL = 60</Text>
          <Text style= {styles.TextDashboar}> Jumlah Router = 10</Text>
          <Text style= {styles.TextDashboar}> Jumlah Switch = 10</Text>
          <Text style= {styles.TextDashboar}> Jumlah Kabel = 10</Text>
          <Text style= {styles.TextDashboar}> Jumlah Server = 10</Text>
          <Text style= {styles.TextDashboar}> Jumlah Keyboard = 10</Text>
          <Text style= {styles.TextDashboar}> Jumlah LCD = 10</Text>
          <Icon.Button name="login" backgroundColor="#49BCFF" size={30} onPress={this.Dashboar}>
            <Text style={{fontSize: 15, color: '#000', textAlign:'center' }}>LOGIN ? </Text>
          </Icon.Button>
        </View>
      </ImageBackground>
    );
  }
}

class LoginActivity extends Component {
  static navigationOptions =
   {
      title: 'LoginActivity',
   };
  constructor(props) {
    super(props)
      this.state = {
        UserEmail: '',
        UserPassword: ''
      }
  }
  UserLoginFunction = () =>{
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
    fetch('https://inventoriinti.000webhostapp.com/Student/user_login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
      email: UserEmail,
      password: UserPassword
    })
 
    }).then((response) => response.json())
    .then((responseJson) => {

      if(responseJson === 'Data Matched'){
        this.props.navigation.navigate('Third', { Email: UserEmail });
      }else{
        Alert.alert(responseJson);
      }
    }).catch((error) => {
        console.error(error);
    });
  }
 
  render() {
    return (
      <ImageBackground source={require('./Page3.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer}>
          <Text style= {styles.TextHeader}>LOGIN</Text>
          <TextInput
            placeholder="Enter User Email"
            onChangeText={UserEmail => this.setState({UserEmail})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="Enter User Password"
            onChangeText={UserPassword => this.setState({UserPassword})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
          />
          <Icon.Button name="login" backgroundColor="#49BCFF" size={30} onPress={this.UserLoginFunction}>
            <Text style={{fontSize: 15, color: '#000', textAlign:'center' }}>LOGIN</Text>
          </Icon.Button>
        </View>
      </ImageBackground>
    );
  }
}

class Menu extends Component {
  static navigationOptions = {
    title: 'MenuActivity',
  };
  MenuInsertFunction = () => {
    this.props.navigation.navigate('Fourth');
  }

  MenuViewFunction = () => {
    this.props.navigation.navigate('Fifth');
  }

  NewMemberFunction = () => {
    this.props.navigation.navigate('Seventh');
  }

  DashborMenuFunction = () => {
    this.props.navigation.navigate('First');
  } 
  
  render() {
    const {goBack} = this.props.navigation;
    return (
      <ImageBackground source={require('./Page3.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer}>
          <Icon name="user" backgroundColor="#000" size={30}>
            <Text style={{fontSize: 15, color: '#000'}}> { this.props.navigation.state.params.Email } </Text>
          </Icon>
          <Text>{"\n"}</Text>
          <Icon.Button name="pluscircle" backgroundColor="#49BCFF" size={30} onPress={this.MenuInsertFunction}>
            <Text style={{fontSize: 15, color: '#000'}}>INSERT</Text>
          </Icon.Button>
          <Text>{"\n"}</Text>
          <Icon.Button name="filetext1" backgroundColor="#49BCFF" size={30} onPress={this.MenuViewFunction}>
            <Text style={{fontSize: 15, color: '#000'}}>VIEW</Text>
          </Icon.Button>
          <Text>{"\n"}</Text>
          <Icon.Button name="adduser" backgroundColor="#49BCFF" size={30} onPress={this.NewMemberFunction}>
            <Text style={{fontSize: 15, color: '#000'}}>NEW MEMBER</Text>
          </Icon.Button>
          <Text>{"\n"}</Text>
          <Icon.Button name="adduser" backgroundColor="#49BCFF" size={30} onPress={this.DashborMenuFunction}>
            <Text style={{fontSize: 15, color: '#000'}}>DASHBOARD</Text>
          </Icon.Button>
          <Text>{"\n"}</Text>
          <Icon.Button name="logout" backgroundColor="#49BCFF" size={30} onPress={() => goBack(null)}>
            <Text style={{fontSize: 15, color: 'red', textAlign:'center' }}>LOGOUT</Text>
          </Icon.Button>
        </View>
      </ImageBackground>
    );
  }
}
 
class Register extends Component {
  constructor() {
    super()
      this.state = {
        UserName: '',
        UserEmail: '',
        UserPassword: ''
      }
  }
 
  UserRegistrationFunction = () =>{
    fetch('https://inventoriinti.000webhostapp.com/Student/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
        name: this.state.UserName,
        email: this.state.UserEmail,
        password: this.state.UserPassword
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(responseJson);
    }).catch((error) => {
      console.error(error);
      }
    );
  }
 
  render() {
    return (
      <ImageBackground source={require('./Page3.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer}>
          <Text style= {styles.TextHeader}></Text>
          <TextInput
            placeholder="Enter User Name"
            onChangeText={name => this.setState({UserName : name})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="Enter User Email"
            onChangeText={email => this.setState({UserEmail : email})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="Enter User Password"
            onChangeText={password => this.setState({UserPassword : password})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
          />
          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UserRegistrationFunction} >
            <Text style={styles.TextStyle}> REGISTER </Text>
          </TouchableOpacity>
          <Text style= {styles.TextWarning} > Member can create a new member! </Text>
        </View>
      </ImageBackground>
    );
  }
}

class MainActivity extends Component {
  static navigationOptions =
  {
    title: 'MainActivity',
  };

  constructor(props) {
    super(props)
    this.state = {
      TextInput_NoAset: '',
      TextInput_Jenis_Perangkat: '',
      TextInput_Merk: '',
      TextInput_SnPerangkat: '',
      TextInput_Lokasi: '',
      TextInput_Penanggung_Jawab: '',
      TextInput_Kondisi: '',
      TextInput_Status: ''
    } 
  }

  InsertStudentRecordsToServer = () =>{
    fetch('https://inventoriinti.000webhostapp.com/Student/InsertStudentData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        noAset : this.state.TextInput_NoAset,
        jenisPerangkat : this.state.TextInput_Jenis_Perangkat,
        merk : this.state.TextInput_Merk,
        snPerangkat: this.state.TextInput_SnPerangkat,
        lokasi: this.state.TextInput_Lokasi,
        pJawab : this.state.TextInput_Penanggung_Jawab,
        kondisi: this. state.TextInput_Kondisi,
        status: this.state.TextInput_Status
      })
      }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  getSelectedPickerValue=()=>{
    Alert.alert("Selected country is : " +jenisPerangkat);
  }

  GoTo_Show_StudentList_Activity_Function = () =>
  {
    this.props.navigation.navigate('Fifth');
  }

  render() {
    return (
      <ImageBackground source={require('./Page3.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer}>
          <ScrollView>
            <Text style={{fontSize: 50, textAlign: 'center', marginBottom: 7}}> Insert </Text>
            <TextInput
              placeholder="No Aset"
              onChangeText={ TextInputValue => this.setState({ TextInput_NoAset : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <Picker
              selectedValue={this.state.TextInput_Jenis_Perangkat}
              onValueChange={(itemValue, itemIndex) => this.setState({TextInput_Jenis_Perangkat: itemValue})} >
              <Picker.Item label="- JENIS -" />
              <Picker.Item label="Router" value="Router" />
              <Picker.Item label="Kabel" value="Kabel" />
              <Picker.Item label="Switch" value="Switch" />
              <Picker.Item label="Server" value="Server" />
              <Picker.Item label="Keyboard" value="Keyboard" />
              <Picker.Item label="Lcd" value="Lcd" />
            </Picker>
            <TextInput
              placeholder="Merk"
              onChangeText={ TextInputValue => this.setState({ TextInput_Merk : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Sn Perangkat"
              onChangeText={ TextInputValue => this.setState({ TextInput_SnPerangkat : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Lokasi"
              onChangeText={ TextInputValue => this.setState({ TextInput_Lokasi : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Penanggung Jawab"
              onChangeText={ TextInputValue => this.setState({ TextInput_Penanggung_Jawab : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Kondisi"
              onChangeText={ TextInputValue => this.setState({ TextInput_Kondisi : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Status"
              onChangeText={ TextInputValue => this.setState({ TextInput_Status : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >
              <Text style={styles.TextStyle}> INSERT </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >
              <Text style={styles.TextStyle}> VIEW </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

class ShowStudentListActivity extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      text: '',
      isLoading: true
    }
    this.arrayholder = [];
  }
  static navigationOptions =
  {
    title: 'ShowStudentListActivity',
  };
  componentDidMount() {
    return fetch('https://inventoriinti.000webhostapp.com/Student/ShowAllStudentsList.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, 
      function() {
        this.arrayholder = responseJson ;
      });
    })
    .catch((error) => {
       console.error(error);
    });
  }
  GetStudentIDFunction=(noAset,jenisPerangkat, merk, snPerangkat, lokasi, pJawab, kondisi, status)=>{
    this.props.navigation.navigate('Sixth', { 
      ID : noAset,
      JENIS_PERANGKAT : jenisPerangkat,
      MERK : merk,
      SN_PERANGKAT : snPerangkat,
      LOKASI : lokasi,
      PENANGGUNG_JAWAB : pJawab, 
      KONDISI : kondisi,
      STATUS : status
    });
  }
  SearchFilterFunction(text){
    const newData = this.arrayholder.filter(function(item){
      const itemData = item.noAset.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  BackToMenu = () => {
    this.props.navigation.navigate('Second');
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    const { search } = this.state;
    return (
      <ImageBackground source={require('./Page3.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer_For_Show_StudentList_Activity}>
          <Text style={{fontSize: 50, textAlign: 'center', marginBottom: 7}}> DATA </Text>
          <TextInput 
            style={styles.TextInputStyleClass}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid='transparent'
            placeholder="Search Here"
          />
          <ListView
            dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}
            enableEmptySections={true}
            renderRow={ (rowData) => <Text style={styles.rowViewContainer} 
            onPress={this.GetStudentIDFunction.bind(
            this, rowData.noAset,
            rowData.jenisPerangkat, 
            rowData.merk, 
            rowData.snPerangkat, 
            rowData.lokasi,
            rowData.pJawab,
            rowData.kondisi,
            rowData.status
            )} > 
            {rowData.noAset} :
            {rowData.jenisPerangkat} 
            </Text> }
          />
          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.BackToMenu} >
            <Text style={styles.TextStyle}> MENU </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

class EditStudentRecordActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInput_NoAset: '',
        TextInput_Jenis_Perangkat: '',
        TextInput_Merk: '',
        TextInput_SnPerangkat: '',
        TextInput_Lokasi: '',
        TextInput_Penanggung_Jawab: '',
        TextInput_Kondisi: '',
        TextInput_Status: ''
      }
    }
    componentDidMount(){
      this.setState({ 
        TextInput_NoAset: this.props.navigation.state.params.ID,
        TextInput_Jenis_Perangkat: this.props.navigation.state.params.JENIS_PERANGKAT,
        TextInput_Merk: this.props.navigation.state.params.MERK,
        TextInput_SnPerangkat: this.props.navigation.state.params.SN_PERANGKAT,
        TextInput_Lokasi: this.props.navigation.state.params.LOKASI,
        TextInput_Penanggung_Jawab: this.props.navigation.state.params.PENANGGUNG_JAWAB,
        TextInput_Kondisi: this.props.navigation.state.params.KONDISI,
        TextInput_Status: this.props.navigation.state.params.STATUS,
      })
    }
    static navigationOptions =
    {
      title: 'EditStudentRecordActivity',
    };
    UpdateStudentRecord = () =>{
      fetch('https://inventoriinti.000webhostapp.com/Student/UpdateStudentRecord.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          noAset : this.state.TextInput_NoAset,
          jenisPerangkat : this.state.TextInput_Jenis_Perangkat,
          merk : this.state.TextInput_Merk,
          snPerangkat: this.state.TextInput_SnPerangkat,
          lokasi: this.state.TextInput_Lokasi,
          pJawab : this.state.TextInput_Penanggung_Jawab,
          kondisi: this. state.TextInput_Kondisi,
          status: this.state.TextInput_Status
        })
        }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
        this.props.navigation.navigate('Third');
    }
    getSelectedPickerValue=()=>{
      Alert.alert("Selected country is : " +jenisPerangkat);
    }
    DeleteStudentRecord = () =>{
      fetch('https://inventoriinti.000webhostapp.com/Student/DeleteStudentRecord.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          noAset : this.state.TextInput_NoAset
        })
        }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
        this.props.navigation.navigate('Third');
    }

  render() {
    return (
      <ImageBackground source={require('./Page3.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContainer}>
          <ScrollView>
            <Text style={styles.TextHeader}> UPDATE or DELETE </Text>
            <TextInput
              placeholder="No Aset"
              value={this.state.TextInput_NoAset}
              onChangeText={ TextInputValue => this.setState({ TextInput_NoAset : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <Picker
              selectedValue={this.state.TextInput_Jenis_Perangkat}
              onValueChange={(itemValue, itemIndex) => this.setState({TextInput_Jenis_Perangkat: itemValue})} >
              <Picker.Item label="Router" value="Router" />
              <Picker.Item label="Kabel" value="Kabel" />
              <Picker.Item label="Switch" value="Switch" />
              <Picker.Item label="Server" value="Server" />
              <Picker.Item label="Keyboard" value="Keyboard" />
              <Picker.Item label="Lcd" value="Lcd" />
            </Picker>
            <TextInput
              placeholder="Merk"
              value={this.state.TextInput_Merk}
              onChangeText={ TextInputValue => this.setState({ TextInput_Merk : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Sn Perangkat"
              value={this.state.TextInput_SnPerangkat}
              onChangeText={ TextInputValue => this.setState({ TextInput_SnPerangkat : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Lokasi"
              value={this.state.TextInput_Lokasi}
              onChangeText={ TextInputValue => this.setState({ TextInput_Lokasi : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Penanggung Jawab"
              value={this.state.TextInput_Penanggung_Jawab}
              onChangeText={ TextInputValue => this.setState({ TextInput_Penanggung_Jawab : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Kondisi"
              value={this.state.TextInput_Kondisi}
              onChangeText={ TextInputValue => this.setState({ TextInput_Kondisi : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput
              placeholder="Status"
              value={this.state.TextInput_Status}
              onChangeText={ TextInputValue => this.setState({ TextInput_Status : TextInputValue }) }
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
              <Text style={styles.TextStyle}> UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
              <Text style={styles.TextStyle}> DELETE  </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}


const MyNewProject = createStackNavigator(
  {
   First: {screen: DashboarActivity}, 
   Second: { screen: LoginActivity },
   Third: { screen: Menu },
   Fourth: { screen: MainActivity },
   Fifth: { screen: ShowStudentListActivity},
   Sixth: {screen: EditStudentRecordActivity},
   Seventh: {screen: Register}
  }
)

const AppContainer = createAppContainer(MyNewProject);
export default AppContainer

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
  },
 
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 2,
    borderColor: '#2d89ef',
    borderRadius: 5 ,
  },

  MainContainer_For_Show_StudentList_Activity :{
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
  },

  TouchableOpacityStyle: {
    paddingTop:10,
    textAlign: 'center',
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '100%',
    backgroundColor: '#49BCFF'
  },

  TextStyle:{
    color:'black',
    textAlign:'center'
  },

  Icon:{
    alignItems: 'center',
    marginLeft: 132
  },

  TextEmail: {
    fontSize: 15,
    color: "black",
    textAlign: 'center', 
    marginBottom: 15
  },

  TextWarning: {
    fontSize: 15,
    color: "red",
    textAlign: 'center', 
  },

  TextHeader: {
    fontSize: 40,
    color: "#000",
    textAlign: 'center', 
    marginBottom: 15
  }, 

  TextDashboar: {
    fontSize: 15,
    color: "#000",     
    marginBottom: 15
  },

  TextComponentStyle: {
    fontSize: 70,
    color: "#000",
    textAlign: 'center', 
    marginBottom: 15
  }
});
