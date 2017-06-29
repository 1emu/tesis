import React, {Component} from 'react';
import {View, Image, PanResponder, Animated, Text} from 'react-native';
import Button from 'apsl-react-native-button';
import {observer} from 'mobx-react/native'
import {autorun} from 'mobx';
import Modal from 'react-native-modal';

@observer
export default class ModalView extends Component {

  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  constructor(props) {
    super(props);
    this.modal = this.props.modal
    autorun(() => this.toggleModal());
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <Button onPress={() => this._showModal()}>
          <Text>Show Modal</Text>
        </Button>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button onPress={() => this._hideModal()}>
              <Text>Hide Modal</Text>
            </Button>
          </View>
        </Modal>

      </View>
    )
  }

  toggleModal() {
    console.log('esta detectando el cambio!', this.modal.isOpen);
  }
}
