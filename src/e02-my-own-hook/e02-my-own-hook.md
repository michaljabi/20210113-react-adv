# e02 My Own Hook

## Zadanie:
... jest bardzo podobne do tego z [b01-FasaC](../b01-function-as-a-child-component). Jednak tym razem logikę ładowania cytatów wyodrębniamy do własnego hooka `useQuotes` - tak aby była re-używalna. 

Na dobry początek zrefaktoryzuj komponent `MemorableQuotes` tak, aby działając tak samo — używał `hooks`. Dopiero później zastanów się jak wyodrębnić logikę i jak ją zastosować w `OnlyYodaQuotes`. 

Cytaty tylko _Yoda_, powinno dać się uzyskać poprzez wywołanie hooka razem z nazwą autora np: 

```javascript

useQuotes('Yoda')

```
