'use strict'

var React = require('react-native')
var Mapbox = require('react-native-mapbox-gl')
var mapRef = 'mapRef'

var {
  AppRegistry,
  StyleSheet,
  StatusBarIOS,
  View
} = React

var Sirens = React.createClass({
  mixins: [Mapbox.Mixin],

  getInitialState: function () {
    return {
      center: {
        latitude: -26.4537736,
        longitude: -49.1179425
      },
      zoom: 11
    }
  },

  onRegionChange: function (location) {
    this.setState({ currentZoom: location.zoom })
  },

  onRegionWillChange: function (location) {
    console.log(location)
  },

  onUpdateUserLocation: function (location) {
    console.log(location)
  },

  onLongPress: function (location) {
    console.log('Long pressed', location)
  },

  render: function () {
    StatusBarIOS.setHidden(true)
    return (
      <View>
        <Mapbox
          style={styles.map}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showUserLocation={true}
          ref={mapRef}
          accessToken={''}
          styleURL={this.mapStyles.emerald}
          userTrackingMode={this.userTrackingMode.none}
          centerCoordinate={this.state.center}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
        />
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('Sirens', () => Sirens)
