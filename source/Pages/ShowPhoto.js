import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../init/store';
import { Image, Dimensions } from 'react-native';
import { Container } from 'native-base';

export default class ShowPhoto extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title:            navigation.getParam('name', 'Photo'),
            headerStyle:      { backgroundColor: '#324291' },
            headerTintColor:  '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
        };
    };

    render () {
        const url = this.props.navigation.getParam('url', 'url');
        const imageUrl = { uri: url };
        const win = Dimensions.get('window');
        const imageSize = { width: win.width, height: win.height - 75 };


        return (
            <Provider store = { store }>
                <Container>
                    <Image
                        source = { imageUrl }
                        style = { imageSize }
                    />
                </Container>
            </Provider>
        );
    }
}
