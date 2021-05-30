import { useState, useCallback, useRef } from 'react'

import { Select, Spin } from 'antd'

import api from '../lib/api'

import { debounce } from 'lodash'

const Option = Select.Option

function SearchUser({ onChange, value }) {
    // 等同于 {current:0}
    const lastFetchIdRef = useRef(0)

    const [fetching, setFetching] = useState(false)

    const [options, setOptions] = useState([])

    const fetchUser = useCallback(debounce(value => {

        // 每次执行发起请求的时候，让该值向上加 1
        lastFetchIdRef.current += 1
        // 这个 fetchId 表示执行这次 request 的 id
        const fetchId = lastFetchIdRef.current

        setFetching(true)
        setOptions([])
        // 不需要传入 req 和 res ，因为这是一个要用户点输入才会执行的操作，肯定是在浏览器环境执行的内容

        if (!value) {
            return
        }
        api.request({
            url: `/search/users?q=${value}`
        }).then(reps => {
            // 如果一旦这个 fetchId 和 id 不一致，所以前面的请求是可以抛弃的
            if (fetchId !== lastFetchIdRef.current) {
                return setFetching(false)
            }
            const data = reps.data.items.map(user => ({
                text: user.login,
                value: user.login
            }))
            console.log(data);
            setFetching(false)
            setOptions(data)
        })


    }, 500), [])

    // 用户在下拉框出来选了某个值之后
    // 这个 value 就是用户选择的值，对应的就是某个 option 上的 value
    const handleChange = (value) => {
        // value 是某个 option 的值
        setOptions([])
        setFetching(false)
        // 数据传递给我们使用这个组件的地方，接收一个 onChange 的参数，而这个参数是一个方法，把这个 value 传递出去，然后外面使用这个组件，会传入一个 value，而这个 value 就是我们显示的 value
        onChange(value)
    }



    // showSearch -> 表示的是 select 具有搜索功能
    // filterOption -> 用于 Select 组件现成已经有 Option 来出现了，这个时候我们输入框中输入文字，是输入我们现有的已经在 Option 里面的展示的这些内容。 因为我们要展示服务端的内容，所以设置为 false。
    return <Select style={{ width: 200 }} showSearch={true} notFoundContent={fetching ? <Spin size='small' /> : <span>Nothing Found</span>} filterOption={false} placeholder='创建者' allowClear={true} onSearch={fetchUser} onChange={handleChange} value={value}>
        {
            options.map(ops => <Option value={ops.value} key={ops.value}>{ops.text}</Option>)
        }
    </Select>

}

export default SearchUser