import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Dimensions
} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import {
  useNavigation,
} from '@react-navigation/native';

import {
  BackButton,
  BackContainer,
  Container,
  EmptyContainer,
  EmptyTextList,
  FlatList,
  Header,
  Input,
  ItemContainer,
  ListContainer,
  Search,
  Separator,
  TextHeader,
  TextSearch,
  TouchableItem
} from './styles';

import { useStockState } from '../../contexts/Stock';
import Detail from '../Detail';
import { Modal } from '../../components/Modal';

import { getStockCompared } from '../../services/api';

import colors from '../../assets/styles/colors';

const Compare = () => {
  const [stockModal, setStockModal] = useState({});
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const { stock } = useStockState();
  const navigation = useNavigation();
  const { mutate, data: stockResult } = getStockCompared();
  const windowWidth = Dimensions.get('screen').width

  const handleCompare = async (stocksCompare) => {
    setLoading(true);
    let stockCompareValues = [];
    stockCompareValues.push(stocksCompare);

    mutate(
      { stockName: stock.name, stocksToCompare: stockCompareValues },
      {
        onError(error) {
          return Alert.alert(error.message);
        },
        onSettled() {
          setTimeout(() => setLoading(false), 2000);
        },
      }
    );
  };

  const handleOpenGains = (item) => {
    setStockModal(item);
    setVisible(true);
  };

  const renderItem = ({ item, index }) => {
    const date = moment(new Date(item?.pricedAt)).format('DD/MM/yyyy')

    return (
      <View>
        {loading && index === 1 ? (
          <ActivityIndicator size='large' />
        ) : (
          <View>
            <TouchableItem onPress={() => handleOpenGains(item)}>
              <ItemContainer>
                <TextSearch>{item.name}</TextSearch>
                <TextSearch>
                  {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.lastPrice)
                      .replace(/^(\D+)/, '$1 ')}
                </TextSearch>
                <TextSearch>{date}</TextSearch>
              </ItemContainer>
            </TouchableItem>

            {stockResult?.lastPrices?.length < 2 && (
              <EmptyContainer>
                <EmptyTextList>
                  Nenhuma ação encontrada.
                </EmptyTextList>
              </EmptyContainer>
            )}
          </View>
        )}
      </View>
    );
  };

  const renderSeparator = () => {
    return (
      <Separator />
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Container>
        <Header>
          <BackContainer>
            <BackButton
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name='left' size={20} color={colors.white} />
            </BackButton>
            <TextHeader>COMPARAR</TextHeader>
          </BackContainer>
          <Search accessibilityRole='search'>
            <Input
              placeholder='Buscar'
              onEndEditing={(e) => handleCompare(e.nativeEvent.text)}
            />
            <MaterialCommunityIcons
              name='magnify'
              color={colors.lightGray}
              size={18}
              style={{ marginStart: 11, marginEnd: -9 }}
            />
          </Search>
        </Header>
        <ListContainer>
          <FlatList
            data={stockResult?.lastPrices}
            horizontal
            scrollEnabled={false}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
          />
        </ListContainer>

        <Modal height={400} visible={visible} close={() => setVisible(false)}>
          <Detail data={[stockModal]} setModalVisible={setVisible} />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};
export default Compare;
