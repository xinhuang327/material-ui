import React from 'react-native';
import look, {StyleSheet} from 'react-look-native';

const {
  Text,
  View,
} = React;

class Subheader extends React.Component {
  static propTypes = {
    /**
     * Node that will be placed inside the `Subheader`.
     */
    children: React.PropTypes.node,

    /**
     * If true, the `Subheader` will be indented by `72px`.
     */
    inset: React.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: React.PropTypes.object,
  };

  static defaultProps = {
    inset: false,
  };

  render() {
    const {
      children,
      inset,
      style,
      ...other,
    } = this.props;

    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 48,
    flex: 0,
    justifyContent: 'center',
    backgroundColor: '#fff', // To show the box sizing
  },
  text: {
    fontWeight: () => {
      return '500';
    },
    paddingLeft: (props) => props.inset ? 72 : 16,
    textAlignVertical: 'center',
    fontSize: 14,
    color: () => {
      return 'rgba(0, 0, 0, 0.54)';
    },
  },
});


export default look(Subheader);
