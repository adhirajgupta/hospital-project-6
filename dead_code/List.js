import * as React from 'react';
import { List, } from 'react-native-paper';
import { ScrollView , Dimensions,} from 'react-native';
// import { tpaList, otherCompanyList, insuranceCompanyList } from './dataSet';
const { width, height } = Dimensions.get('screen')

const ListComponent = (tpaList, otherCompanyList, insuranceCompanyList) => {
    const [data, setData] = React.useState({
        tpaList:tpaList,
        otherCompanyList:otherCompanyList,
        insuranceCompanyList:insuranceCompanyList
    });

    console.log(data.tpaList.tpaList)


    return (

       
            <ScrollView>
            {
                data.tpaList.tpaList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal style={{minWidth:width}}>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{borderBottomColor:'black',borderBottomWidth:1,}} />
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
            {
                data.tpaList.otherCompanyList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{borderBottomColor:'black',borderBottomWidth:1}}/>
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
            {
                data.tpaList.insuranceCompanyList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{borderBottomColor:'black',borderBottomWidth:1}}/>
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
        </ScrollView>

        
     
    );
};

export default ListComponent;




// Spare Code 1 - first look 

          /*
        {
        <ScrollView showsVerticalScrollIndicator>
            <List.Section title="Accordions">
                <List.Accordion
                    title="TPA EMPANELMENT"
                    left={props => <List.Icon {...props} icon="folder" />}
                >
                    {
                        tpaList.map((element, index) => (
                            // console.log(element),
                            <ScrollView horizontal>
                                <List.Item title={element} key={index} titleStyle={{ textAlign: 'left',marginRight:150 }} />
                            </ScrollView>
                        ))
                        // <List.Item title="First item" />
                        // <List.Item title="Second item" />
                    }
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First items" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>
        </ScrollView>
        }
     */



    // Spare Code 2 - Working
/*
            <ScrollView>
            {
                data.tpaList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal style={{minWidth:width}}>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{borderBottomColor:'black',borderBottomWidth:1,}} />
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
            {
                data.otherCompanyList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{borderBottomColor:'black',borderBottomWidth:1}}/>
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
            {
                data.insuranceCompanyList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{borderBottomColor:'black',borderBottomWidth:1}}/>
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
        </ScrollView>
*/