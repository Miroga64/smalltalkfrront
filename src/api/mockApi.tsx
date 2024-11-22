import mocks, { MocksEnum } from "../mock/mocks";

const fetchMock = (field: MocksEnum) => {
    const randTimer = Math.random() * 100
    return new Promise((res) => {
        setTimeout(() => {
            res(mocks[field])
        }, randTimer)
    }, )
}


export default fetchMock;