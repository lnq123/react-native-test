import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { todoUpdate } from './actions';
import { CardSection, Input } from './components/common';

class TodoForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Event"
            placeholder="start a to do"
            value={this.props.event}
            onChangeText={value => this.props.todoUpdate({ prop: 'event', value })}
          />
        </CardSection>


        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Complete</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.todoUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Incomplete" value="Incomplete" />
            <Picker.Item label="Complete" value="Complete" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { event, shift } = state.todoForm;

  return { event, shift };
};

export default connect(mapStateToProps, { todoUpdate })(TodoForm);
