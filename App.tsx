import { View, StyleSheet } from 'react-native';

import CardForPreview from './components/CardForPreview/CardForPreview';
import CardTitle from './components/CardTitle/CardTitle';
import Separator from './components/Separator/Separator';
import CardListItemIcon from './components/CardListItemIcon/CardListItemIcon';
import CardListItem from './components/CardListItem/CardListItem';
import CardListItemBtn from './components/CardListItemBtn/CardListItemBtn';
import CardListItemCount from './components/CardListItemCount/CardListItemCount';
import CardListItemSwitch from './components/CardListItemCountSwitcher/CardListItemCountSwitcher';
import CardForDone from './components/CardForDone/CardForDone';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <CardForPreview
          title="Словники"
          subTitle="Усі слова повинні належати словнику, словник повинен обєднувати якусь сутність, наприклад колір."
          linkTitle="Відкрити Словники"
        />
        <CardTitle title="Dictionary" />
        <Separator />
        <CardListItemIcon title="Color" />
        <CardListItem title="Green" subTitle="Зелений" />
        <CardListItemBtn title="Чорний" />
        <CardListItemCount title="Нових Слів" count="44" />
        <CardListItemSwitch title="Оновлювати Словники" data={true} />
        <CardForDone title="" subTitle="" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
});
