import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const LibraryList = ({ libraries }) => {
  const renderItem = ({ item: library }) => {
    return <ListItem library={library} />;
  };

  return (
    <FlatList
      data={libraries}
      renderItem={renderItem}
      keyExtractor={(library) => library.id.toString()}
    />
  );
};

const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
