import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

/**
 * Basic container component that is just a wrapper around a View component.
 */
const Container = ({
  style,
  children,
  padding,
  backgroundColor,
  center,
  ...otherProps
}) => {
  const containerStyles = { padding, backgroundColor }

  if (center) {
    containerStyles.alignItems = 'center'
    containerStyles.justifyContent = 'center'
  }

  return (
    <View style={[styles.container, containerStyles]} {...otherProps}>
      {children}
    </View>
  )
}

Container.propTypes = {
  /**
     * Shorthand for adding padding to the View.
     */
  padding: PropTypes.number,
  /**
     * Shorthand to add padding to the View.
     */
  backgroundColor: PropTypes.string,
  /**
     * Shorthand to center children.
     */
  center: PropTypes.bool
}

Container.defaultProps = {
  padding: 0,
  backgroundColor: '#fff'
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

export default Container