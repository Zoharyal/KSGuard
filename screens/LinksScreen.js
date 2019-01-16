import React from 'react';
import { ScrollView, StyleSheet, SectionList, Text, View } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const sections = [
      { data: [{ value: 'Test1'}], title: 'Title1' },
      { data: [{ value: 'Test2'}], title: 'Title2' },
    ];

    return (
      <ScrollView style={styles.container}>
        <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        keyExtractor={(item, index) => index}
        sections={sections} />
      </ScrollView>
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>
            {item.value}
          </Text>
        </SectionContent>
      )
  }

}

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );
};

const SectionContent = props => {
  return (
    <View style={styles.sectionContentContainer}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
});
