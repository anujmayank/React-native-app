import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
 container: {
     flex: 1,
     backgroundColor: 'dodgerblue',
     alignSelf: 'stretch'
 },
 header: {
     backgroundColor: '#282c34',
     minHeight: 50,
     paddingTop: 10,
     textAlign: 'center',
     justifyContent: 'center',
     fontSize: 20,
     color: 'white'
 },
 project: {
     textAlign: 'left',
     marginLeft: 10,
     color: 'darkorange',
     fontWeight: 'bold',
     marginBottom: 2
 },
 projectLine: {
     textAlign: "left",
     marginLeft: 10,
     borderBottomColor: '#D3D3D3',
     borderBottomWidth: 1,
 },
 projectName: {
     backgroundColor: '#D3D3D3',
     fontWeight: 'bold',
     textAlign: 'left',
     padding: 10,
     marginBottom: 5,
     width:'100%',
     marginTop: 10
 },
 projectTitle: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%'
 },
 projectSubtitle:{
        textAlign:"center",
        padding: 5
 },
 fullWidth: {
    width: '100%'
    }
});

export default styles;
