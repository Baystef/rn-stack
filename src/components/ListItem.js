import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ListItem = ({
  library: { id, title, description },
  selectLibrary,
  expanded,
}) => {
  const { titleStyles } = styles;

  const renderDescription = () => {
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{description}</Text>
        </CardSection>
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={
        (LayoutAnimation.configureNext(LayoutAnimation.Presets.spring),
        () => selectLibrary(id))
      }>
      <View>
        <CardSection>
          <Text style={titleStyles}>{title}</Text>
        </CardSection>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
