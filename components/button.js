import {stylesComponents} from './styles-componentes'
import { Text, View } from 'react-native';

export function Button({color, colorTexto, texto}) {
  return (
    <View style={{...stylesComponents.button, backgroundColor: color}}>
      <Text style={{color: colorTexto}}>{texto}</Text>
    </View>
  );
}

