import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../../ethereum/factory';
import web3 from '../../../ethereum/web3';
export default class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({...this.state,errorMessage:'',loading:true})
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution).send({
        from: accounts[0],
      });
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: err.message });
    }
    this.setState({...this.state,loading:false})
  };
  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Button primary>{this.state.minimumContribution}</Button>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              labelPosition="right"
              label="wei"
              value={this.state.minimumContribution}
              onChange={(event) => this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops" content={this.state.errorMessage} />
          <Button loading={this.state.loading } primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}
