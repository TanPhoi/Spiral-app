import {typography} from '@/themes/typography';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ButtonProps = {
  label: string;
  disabled: boolean;
  loading?: boolean;
  onPress: () => void;
};

const Button = ({
  label,
  disabled,
  loading = false,
  onPress,
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.btn, !disabled ? undefined : styles.overlay]}>
      {loading && <ActivityIndicator color={'white'} size={20} />}

      <Text style={styles.txtButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    columnGap: 6,
  },
  txtButton: {
    color: 'white',
    fontWeight: '600',
    ...typography.body,
  },
  overlay: {
    opacity: 0.5,
  },
  loading: {
    flexDirection: 'row',
    width: 18,
  },
});

export default Button;
