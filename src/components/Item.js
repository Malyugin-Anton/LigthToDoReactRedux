import React from 'react'

import { Icon } from 'react-icons-kit'
import { minus } from 'react-icons-kit/entypo/minus'

const Item = ({ text, completed, id, onRemoveItem = f => f, onToggleItem = f => f}) => {
    return (
      <li
        className={(completed) ? "done" : null}
        onClick={() => onToggleItem(id)}
      >
        {text} <button onClick={() => onRemoveItem(id)}><Icon icon={minus}/></button>
      </li>
    )
}

export default Item
