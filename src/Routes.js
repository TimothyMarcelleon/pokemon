import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PokemonList from './view/PokemonList'
import DetailedPokemon from './view/DetailedPokemon'
import CatchPokemonScreen from './view/CatchPokemonScreen'
import CaughtPokemonList from './view/CaughPokemonList'


export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/pokemons"
        />
        <Route
          component={PokemonList}
          exact
          path='/pokemons'
        />

        <Route
          component={DetailedPokemon}
          exact
          path='/pokemon-detail/:name'
        />

        <Route
          component={CatchPokemonScreen}
          exact
          path='/catch-pokemon/:name'
        />

        <Route
          component={CaughtPokemonList}
          exact
          path='/my-pokemon-list'
        />
      </Switch>
    );
  }
}
