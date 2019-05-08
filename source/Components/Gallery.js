import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import { Content, Card, CardItem, Text, Thumbnail } from 'native-base';
// Actions
import { photosActions } from '../bus/photos/actions';
// Styles
import { styles } from './styles';

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...photosActions }, dispatch),
    };
};

class Gallery extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPhotosAsync();
    }

    render () {
        const { photos, navigate } = this.props;


        return (
            <Content style = { styles.galleryContent }>
                {photos.map((item) => {
                    const _showPhoto = () => {
                        navigate('ShowPhoto', {
                            name: item.get('description')? item.get('description'): item.getIn(['user', 'name']),
                            url:  item.getIn(['urls', 'regular']),
                        });
                    };


                    return (
                        <Card
                            key = { item.get('id') }>
                            <CardItem header>
                                <Text style = { styles.textHeader }>{item.get('description')}</Text>
                            </CardItem>
                            <CardItem
                                cardBody
                                style = { styles.cardBody }
                                button onPress = { _showPhoto }>
                                <Thumbnail
                                    large
                                    source = { { uri: item.getIn(['urls', 'small']) } }
                                    square
                                    style = { styles.thumbImage }
                                />
                            </CardItem>
                            <CardItem footer>
                                <Text style = { styles.textFooter }>{item.getIn(['user', 'name'])}</Text>
                            </CardItem>

                        </Card>
                    );
                })}
            </Content>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Gallery);
