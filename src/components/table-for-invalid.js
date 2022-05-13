import { Table, Tag, Space } from "antd";
import { getWaterBrands, getWaterBrandVersions, getWaterBrandVersionSourceMappings, getWaterSources } from "../data";

export default function TableForInvalid() {
    const columns = [
        {
            title: '브랜드',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: '제조원',
            dataIndex: 'water-source',
            key: 'water-source',
        },
        {
            title: '수질적합',
            dataIndex: 'validity',
            key: 'validity',
        },
        {
            title: '부적합 판정 횟수',
            dataIndex: 'invalid-count',
            key: 'invalid-count',
        },
        {
            title: '출시일',
            dataIndex: 'open-date',
            key: 'open-date',
        },
    ]

    const waterBrands = getWaterBrands()

    
}
