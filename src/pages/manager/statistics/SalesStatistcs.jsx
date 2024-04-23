import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SalesStatisticsPage = () => {
  // Sample records for sales statistics
  const salesData = [
    { productId: 'P001', productName: 'Milk', unitsSold: 120, revenue: 600 },
    { productId: 'P002', productName: 'Bread', unitsSold: 200, revenue: 400 },
    { productId: 'P003', productName: 'Eggs', unitsSold: 150, revenue: 300 },
    { productId: 'P004', productName: 'Juice', unitsSold: 100, revenue: 500 },
    { productId: 'P005', productName: 'Cookies', unitsSold: 80, revenue: 320 },
  ];

  // Calculate total revenue and total units sold
  const totalRevenue = salesData.reduce((acc, item) => acc + item.revenue, 0);
  const totalUnitsSold = salesData.reduce((acc, item) => acc + item.unitsSold, 0);

  // Render each item in the sales data list
  const renderSalesItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.productName}</Text>
      <Text>Units Sold: {item.unitsSold}</Text>
      <Text>Revenue: ${item.revenue}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales Statistics</Text>
      <Text>Total Units Sold: {totalUnitsSold}</Text>
      <Text>Total Revenue: ${totalRevenue}</Text>

      <FlatList
        data={salesData}
        renderItem={renderSalesItem}
        keyExtractor={(item) => item.productId}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    marginTop: 20,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default SalesStatisticsPage;
