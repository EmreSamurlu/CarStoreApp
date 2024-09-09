// Mock the fetch API (if needed)
// global.fetch = require('jest-fetch-mock');

jest.mock('@react-native-async-storage/async-storage', () => 'AsyncStorage');

// Mock react-native-vector-icons (if used)
// jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key}),
  Trans: () => null,
}));

// jest.mock('../../redux/store', () => ({
//   useAppDispatch: jest.fn(),
// }));

// jest.mock('../../redux/features/cart/slicer', () => ({
//   decreaseQuantity: jest.fn(),
//   increaseQuantity: jest.fn(),
// }));

// jest.mock('react-native-paper', () => ({
//   IconButton: jest.fn(props => <button {...props} />), // Mock IconButton as a button element
//   useTheme: jest.fn(),
// }));
