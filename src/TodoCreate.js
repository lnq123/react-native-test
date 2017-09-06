import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoUpdate, todoCreate } from './actions';
import { Card, CardSection, Button } from './components/common';
import TodoForm from './TodoForm';

class TodoCreate extends Component {
  onButtonPress() {
    const { event, shift } = this.props;

    this.props.todoCreate({ event, shift: shift || 'Imcomplete' });
  }

  render() {
    return (
      <Card>
        <TodoForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { event, shift } = state.todoForm;

  return { event, shift };
};

export default connect(mapStateToProps, {
  todoUpdate, todoCreate
})(TodoCreate);
