import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Input } from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
export default class CampaignNew extends Component {
    state = {
        minimumContribution: '',
    }

    onSubmit = async (event) => { 
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
            })
            
    }
    render() {
        return (
          <Layout>
                <h3>Create a Campaign</h3>
                <Button primary>{this.state.minimumContribution }</Button>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Minimum Contribution</label>
                <Input
                  labelPosition="right"
                  label="wei"
                  value={this.state.minimumContribution}
                  onChange={(event) =>
                    this.setState({ minimumContribution: event.target.value })
                  }
                />
              </Form.Field>
              <Button primary>Create</Button>
            </Form>
          </Layout>
        );
    }
}
