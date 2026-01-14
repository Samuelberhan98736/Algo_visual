from typing import Dict, List, Tuple


def build_insert_steps(
    array: List[int],
    index: int,
    value: int
) -> Tuple[List[Dict[str, object]], List[int]]:
    steps: List[Dict[str, object]] = []
    working = array.copy()

    steps.append({
        "type": "explain",
        "text": f"Insert {value} at index {index} and shift elements right.",
    })

    if not working:
        working.append(value)
        steps.append({"type": "update", "index": 0, "value": value})
        steps.append({"type": "done"})
        return steps, working

    working.append(working[-1])

    for position in range(len(working) - 1, index, -1):
        steps.append({"type": "highlight", "indices": [position - 1, position]})
        working[position] = working[position - 1]
        steps.append({"type": "update", "index": position, "value": working[position]})

    working[index] = value
    steps.append({"type": "update", "index": index, "value": value})
    steps.append({"type": "done"})

    return steps, working
