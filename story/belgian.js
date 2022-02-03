// The following example creates five chocolate shop markers in Belgium and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 50.84693089689634, lng: 4.352362179692574 },
  });
  // Set LatLng and title text for the markers. The first marker (Neuhaus)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 50.84687753261257, lng: 4.3531066713300275 }, "Neuhaus"], 
    [{ lat: 50.846625126831874, lng: 4.353738846454988 }, "Gourmet Chocolaterie Belge"], 
    [{ lat: 50.847015139632866, lng: 4.354423215610558 }, "Godiva"], 
    [{ lat: 50.8473606181687, lng: 4.351853659486694 }, "Elisabeth"],
    [{ lat: 50.84751213131759, lng: 4.351931397330474 }, "Leonidas"], 
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
