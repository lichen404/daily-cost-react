import Layout from '../components/Layout';
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
   background-color: #fff;
`;
const Header = styled.h3`
  font-size: 18px;
  line-height:20px;
  padding: 10px 16px;
  
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    > .note {
      margin-right: auto;
      margin-left: 16px;
      color: #999;
    }
    
`;

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getName} = useTags();
    const hash: { [K: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category);
    selectedRecords.forEach(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });
    const formatDate = (string:string)=>{
        const now = day()
        const api = day(string)
        if (api.isSame(now, 'day')) {
            return '今天';

        } else if (api.isSame(now.subtract(1, 'day'), 'day')) {
            return '昨天';
        } else {
            if (api.isSame(now, 'year')) {
                return api.format('M月D日');
            }
            return api.format('YYYY年M月D日');
        }
    }

    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category} onChange={(category) => {setCategory(category);}}/>
            </CategoryWrapper>
            {array.map(([date,records]) => {
                return (
                    <div key={date}>
                        <Header>{formatDate(date)}</Header>
                        {records.map((record) => {
                            return (
                                <Item key={record.createdAt}>
                                    <div className="tags oneLine">
                                        {record.tagIds.map((tagId,index,array) => index!==array.length-1?<span key={tagId}>{getName(tagId) + '，'}</span>:<span key={tagId}>{getName(tagId)}</span>)}
                                    </div>
                                    {record.note && <div className="note">
                                        {record.note}
                                    </div>}
                                    <div className="amount">
                                        ￥{record.amount}
                                    </div>

                                </Item>
                            );
                        })}
                    </div>
                );
            })}
            <div>

            </div>
        </Layout>
    );
}

export default Statistics;