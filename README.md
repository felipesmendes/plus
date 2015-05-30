# plus - Add and Remove for tables in CakePHP

## Installation

Link in your default template the js file
### CakePHP
```
<?= $this->Html->script("jquery.plus");?>
```

### Html
```
<script src="js/plus.min.js"></script>
```


## Usage
```
<table>
	<thead>

	</thead>
	<tbody>

	</tbody>
</table>

```

```
$("#table").plus({'entity':'ModelName'});
```


