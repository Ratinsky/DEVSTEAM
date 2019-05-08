import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../init/store';
import { Container } from 'native-base';
// Components
import { Gallery } from '../Components';


export default class Main extends Component {
    static navigationOptions = {
        title:       'Gallery',
        headerStyle: {
            backgroundColor: '#324291',
        },
        headerTintColor:  '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render () {
        const { navigate } = this.props.navigation;


        return (
            <Provider store = { store }>
                <Container>
                    <Gallery
                        navigate = { navigate }
                    />
                </Container>
            </Provider>
        );
    }
}
