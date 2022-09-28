import {TouchableOpacity,Text,StyleSheet,} from 'react-native';

export default class Button extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={StyleSheet.button}>
                <Text style={StyleSheet.title}>타이틀</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    title: {
        fontSize: 15,
    },
});