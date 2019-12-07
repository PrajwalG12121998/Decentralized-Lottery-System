const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();

const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;

beforeEach( async () => {
	//get th elist of all accounts
	accounts = await web3.eth.getAccounts();

	//make use of one of the accounts
	lottery = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({data: bytecode})
	.send({from: accounts[0], gas: '1000000'});
});

describe('Lottery', () => {
	it('check deploy contract', () => {
		assert.ok(lottery.options.address);
	});

	
});

/*class Car {
	park() {
		return 'stopped';
	}

	drive() {
		return 'vroom';
	}

}

let car;

beforeEach(()=>{
	car = new Car();
})

describe('Car', () => {
	it('can park', () => {
		assert.equal(car.park(), 'stopped');
	});

	it('can drive', () => {
		assert.equal(car.drive(), 'vroom');
	})
});
*/
/*let accounts;
let inbox;

beforeEach(async () => {
	//get a list of all accounts
	accounts = await web3.eth.getAccounts();


	//use one of those accounts in the contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data: bytecode, arguments: ['Hi There!']})
	.send({from: accounts[0], gas: '1000000'});

	inbox.setProvider(provider);
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address);
	});

	it('check default message', async () => {
		const message = await inbox.methods.message().call();
		assert.equal(message, 'Hi There!');
	});

	it('check set message', async () => {
		await inbox.methods.setMessage('Bye see you').send({ from: accounts[0] });
		const message = await inbox.methods.message().call();
		assert.equal(message, 'Bye see you');
	});
});

*/

